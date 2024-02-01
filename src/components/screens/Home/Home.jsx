import React, { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../Modal/Modal";
import InputModal from "../../InputModal/InputModal";

const Home = () => {
  const [active, setActive] = useState(true);

  return (
    <div className="text-white w-4/5 mx-auto font-sans">
      <h1 className="flex items-center justify-center font-bold text-4xl text-black">
        <span className="opacity-80 mt-4">Аудитории 61 кафедры</span>
      </h1>
      <div className="mt-16">
        <div className="flex justify-between">
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          <Button setActive={setActive} />
        </div>

        <div className="flex justify-between">
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          <Button setActive={setActive} />
          {/* <InputModal active={active} setActive={setActive} /> */}
          <Modal active={active} setActive={setActive} />
          {/* <Modal active={active} setActive={setActive} /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
