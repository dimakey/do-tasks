import React from "react";
import Button from "../components/Button/Button";
import IconButton from "../components/IconButton/IconButton";
import { Calendar, Flag } from "akar-icons";

const TestPage = () => {
  const flexGapStyle = { display: "flex", gap: "1rem", marginBottom: "1rem" };
  return (
    <>
      <div style={flexGapStyle}>
        <Button variant="outline" color="primary">
          Outline Primary
        </Button>

        <Button variant="outline" color="secondary">
          Outline Secondary
        </Button>

        <Button variant="outline" color="danger">
          Outline Danger
        </Button>
      </div>

      <div style={flexGapStyle}>
        <Button variant="filled" color="primary" size="sm">
          Filled Primary
        </Button>

        <Button variant="filled" color="secondary" size="sm">
          Filled Secondary
        </Button>

        <Button variant="filled" color="danger" size="sm">
          Filled Danger
        </Button>
      </div>

      <div style={{ margin: "16px 0" }}>
        <Button variant="text" color="primary" size="md">
          Text Primary
        </Button>

        <Button variant="text" color="secondary">
          Text Secondary
        </Button>

        <Button variant="text" color="error">
          Text Danger
        </Button>
      </div>

      <Button variant="outline" color="danger" size="sm">
        Outline Small Disabled Button
      </Button>

      <Button variant="text" color="danger" size="sm">
        Text
      </Button>

      <div>
        <Button variant="filled" color="primary" size="sm" icon={<Calendar />}>
          Icon Button
        </Button>

        <Button
          variant="filled"
          color="secondary"
          size="md"
          icon={<Calendar />}
        >
          Icon Button
        </Button>

        <Button variant="text" color="secondary" size="xl" icon={<Calendar />}>
          Icon Button
        </Button>
      </div>

      <Button disabled size="sm">
        Disabled Button
      </Button>

      <div>
        <IconButton variant="text" size="sm" circle>
          <Flag />
        </IconButton>

        <IconButton variant="text" size="md" circle>
          <Flag />
        </IconButton>

        <IconButton variant="text" size="lg" circle>
          <Flag />
        </IconButton>
      </div>
    </>
  );
};

export default TestPage;
