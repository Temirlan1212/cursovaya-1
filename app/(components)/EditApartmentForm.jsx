"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditApartmentForm = ({ apartment }) => {
  const [loading, setLoading] = useState(false);
  const EDITMODE = apartment._id === "new" ? false : true;
  const router = useRouter();
  const startingApartmentData = {
    title: "",
    description: "",
    rooms: 1,
    progress: 0,
    status: "активен",
    category: "Комфорт",
  };

  if (EDITMODE) {
    startingApartmentData["title"] = apartment.title;
    startingApartmentData["description"] = apartment.description;
    startingApartmentData["rooms"] = apartment.rooms;
    startingApartmentData["progress"] = apartment.progress;
    startingApartmentData["status"] = apartment.status;
    startingApartmentData["category"] = apartment.category;
  }

  const [formData, setFormData] = useState(startingApartmentData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    setFormData((preState) => ({
      ...preState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (EDITMODE) {
      const res = await fetch(`/api/Apartments/${apartment._id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });
      if (!res.ok) {
        throw new Error("Не удалось обновить квартиру");
      }
    } else {
      const res = await fetch("/api/Apartments", {
        method: "POST",
        body: JSON.stringify({ formData }),
        //@ts-ignore
        "Content-Type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Не удалось создать квартиру");
      }
    }
    setLoading(false);
    router.refresh();
    router.push("/");
  };

  const categories = ["Эконом", "Комфорт", "Бизнес", "Премиум"];

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        method="post"
        className="flex flex-col gap-3 w-1/2"
      >
        <h3>
          {EDITMODE ? "Обновить данные квартиры" : "Создать новую квартиру"}
        </h3>

        <label htmlFor="title">Заголовок</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={handleChange}
          required
          value={formData.title}
        />

        <label htmlFor="description">Описание</label>
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required
          value={formData.description}
          rows="5"
        />

        <label htmlFor="category">Категория</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories?.map((category, _index) => (
            <option key={_index} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label>Количество комнат</label>
        <div>
          {[1, 2, 3, 4, 5].map((room) => (
            <React.Fragment key={room}>
              <input
                id={`rooms-${room}`}
                name="rooms"
                type="radio"
                onChange={handleChange}
                value={room}
                checked={formData.rooms == room}
              />
              <label htmlFor={`rooms-${room}`}>{room}</label>
            </React.Fragment>
          ))}
        </div>

        <label htmlFor="progress">Прогресс строительства</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />

        <label htmlFor="status">Статус</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="активен">Активен</option>
          <option value="продан">Продан</option>
          <option value="приостановлен">Приостановлен</option>
        </select>

        <input
          disabled={loading}
          type="submit"
          className="btn max-w-xs"
          value={loading ? "Загрузка..." : EDITMODE ? "Обновить" : "Создать"}
        />
      </form>
    </div>
  );
};

export default EditApartmentForm;
