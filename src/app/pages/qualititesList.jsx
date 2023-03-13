import React from "react";
import { useHistory } from "react-router-dom";
import QualitiesTable from "../components/ui/qualitiesTable";
import { useQualitiesContext } from "../hooks/useQualities.js";

const QualitiesListPage = () => {
  const { qualities, remove } = useQualitiesContext();
  const history = useHistory();

  const handleEdit = (param) => {
    history.push(`/edit/${param}`);
  };
  const handleDelete = async (param) => {
    await remove(param);
  };

  return (
    <>
      <h1>Qualitites List Page</h1>
      {qualities.length > 0 && (
        <QualitiesTable
          onDelete={handleDelete}
          onEdit={handleEdit}
          data={qualities}
        />
      )}
    </>
  );
};

export default QualitiesListPage;
