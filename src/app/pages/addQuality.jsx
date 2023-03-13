import React from "react";
import { useHistory } from "react-router-dom";
import QualityForm from "../components/ui/qualityForm";
import { useQualitiesContext } from "../hooks/useQualities";

const AddQualityPage = () => {
  const { create } = useQualitiesContext();
  const history = useHistory();
  const handleSubmit = async (content) => {
    await create(content);
    history.push("/");
  };

  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handleSubmit} />
    </>
  );
};

export default AddQualityPage;
