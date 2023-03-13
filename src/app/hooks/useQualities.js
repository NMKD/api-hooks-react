import React, { useContext, useEffect, useState } from "react";
import { qualityService } from "../service/quality.service";
import { toast } from "react-toastify";

const QualitiesContext = React.createContext();

export const QualitiesProvider = ({ children }) => {
  const [qualities, setQualities] = useState([]);
  const getQualities = (id) => qualities.find((qual) => qual._id === id);

  const create = async (content) => {
    const quality = await qualityService.post(content);
    if (typeof quality !== "string") {
      const { data } = quality;
      setQualities((prevState) => [...prevState, data.content]);
      toast.success("Качество успешно добавлено");
    } else {
      toast.error(`Oшибка при отправлении формы: ${quality}`);
    }
  };

  const update = async (id, content) => {
    const quality = await qualityService.put(id, content);
    if (typeof quality !== "string") {
      const { data } = quality;
      setQualities((prevState) =>
        prevState.map((qual) =>
          qual._id === data.content._id ? data.content : qual
        )
      );
      toast.success("Изменения были внесены");
    } else {
      toast.error(`Oшибка при отправлении формы: ${quality}`);
    }
  };

  const remove = async (id) => {
    const quality = await qualityService.delete(id);
    if (typeof quality !== "string") {
      const { data } = quality;
      setQualities((prevState) =>
        prevState.filter((qual) => qual._id !== data.content._id)
      );
      toast.success("Качество успешно удалено");
    } else {
      toast.error(`Oшибка при отправлении формы: ${quality}`);
    }
  };

  useEffect(() => {
    const getQualities = async () => {
      const data = await qualityService.fetchAll();
      typeof data !== "string"
        ? setQualities(data.data.content)
        : toast.error(`Oшибка загрузки данных: ${data}`);
    };
    getQualities();
  }, []);

  return (
    <QualitiesContext.Provider
      value={{ qualities, create, update, remove, getQualities }}
    >
      {children}
    </QualitiesContext.Provider>
  );
};

export const useQualitiesContext = () => {
  return useContext(QualitiesContext);
};
