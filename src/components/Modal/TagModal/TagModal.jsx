import React, {useEffect, useRef, useState} from "react";
import {nanoid} from "@reduxjs/toolkit";
import {Cross, TrashCan} from "akar-icons";
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";

import {Reoverlay} from "reoverlay";
import {kebabCase} from "lodash";

import {selectAllTags} from "../../../store/selectors/tagsSelectors";
import {addTag, editTag, removeTag} from "../../../store/slices/tagsSlice";
import {MAX_TAGS_CHARS} from "../../../utils/constants";
import Button from "../../Button/Button";
import IconButton from "../../IconButton/IconButton";

import {Input} from "../../Input/Input.styled";
import {ButtonGroup, ModalBody, ModalFooter, ModalHeader, ModalTitle,} from "../Modal.styled";
import ModalWrapper from "../ModalWrapper";

const TagModal = ({ tagID }) => {
  const [tagValue, setTagValue] = useState("");
  const tagRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [_, currentTagID] = useLocation().pathname.split("/tag/");
  const closeModal = () => Reoverlay.hideModal();
  const allTags = useSelector(selectAllTags);

  const handleTagValue = (e) => {
    setTagValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (tagID) {
      // Edit exist tag
      dispatch(editTag({ id: tagID, newTitle: kebabCase(tagValue) }));
    } else if (tagValue.trim()) {
      // Add a new tag
      // generated unique ID
      const uniqueID = nanoid(6);
      dispatch(addTag({ id: uniqueID, title: kebabCase(tagValue) }));
      navigate(`/tag/${uniqueID}`);
    }

    closeModal();
  };

  const handleTagDelete = () => {
    if (currentTagID && currentTagID === tagID) {
      navigate(-1);
    }
    dispatch(removeTag({ id: tagID }));
    closeModal();
  };

  useEffect(() => {
    if (tagID) {
      const tag = allTags.find((tag) => tag.id === tagID);
      setTagValue(tag.title);
    }

    tagRef.current.focus();
  }, []);

  return (
    <ModalWrapper>
      <form onSubmit={handleSubmit}>
        <ModalHeader>
          <ModalTitle>{tagID ? "Edit" : "Add"} a tag</ModalTitle>
          <IconButton
            type="button"
            variant="text"
            circle
            size="sm"
            onClick={closeModal}
          >
            <Cross />
          </IconButton>
        </ModalHeader>
        <ModalBody>
          <Input
            type="text"
            placeholder="Enter tag name"
            ref={tagRef}
            maxLength={MAX_TAGS_CHARS}
            value={tagValue}
            onChange={handleTagValue}
          />
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            {tagID && (
              <Button
                type="button"
                variant="text"
                color="danger"
                size="sm"
                icon={<TrashCan />}
                onClick={handleTagDelete}
              >
                Delete
              </Button>
            )}

            <Button
              type="button"
              variant="filled"
              color="secondary"
              size="sm"
              style={{ marginLeft: "auto" }}
              onClick={closeModal}
            >
              Cancel
            </Button>

            <Button type="submit" size="sm">
              {tagID ? "Save" : "Add"}
            </Button>
          </ButtonGroup>
        </ModalFooter>
      </form>
    </ModalWrapper>
  );
};

export default TagModal;
