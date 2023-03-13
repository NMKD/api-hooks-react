import React from "react";
import { useHistory, useParams } from "react-router-dom";
import QualityForm from "../components/ui/qualityForm";
import { useQualitiesContext } from "../hooks/useQualities.js";

const EditQualityPage = () => {
  const { update, getQualities } = useQualitiesContext();
  const history = useHistory();
  const id = useParams().id;
  const quality = getQualities(id);
  const handleSubmit = async (obj) => {
    await update(id, obj);
    history.push("/");
  };

  return (
    <>
      <h1>Edit Quality Page</h1>{" "}
      <QualityForm data={quality} onSubmit={handleSubmit} />
    </>
  );
};

export default EditQualityPage;
