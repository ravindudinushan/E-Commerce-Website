import React from "react";

const ProductDescription = () => {
  return (
    <div className="ring-1 ring-slate-900/10 rounded-lg">
      <div className="flex gap-3">
        <button className="medium-14 p-3 w-32 border-b-2 border-secondary">Description</button>
        <button className="medium-14 p-3 w-32">Care Guide</button>
        <button className="medium-14 p-3 w-32">Color Guide</button>
      </div>
      <hr className="h-[1px] w-full"/>
      <div className="flex flex-col gap-3 p-3">
        <div>
          <h5 className="h5">Detail</h5>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
            autem ipsum quo! Fugit dolor velit et molestiae facilis quaerat
            illo! Cumque alias explicabo reprehenderit pariatur eaque adipisci
            ipsum ratione omnis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
            eos veniam, suscipit eum cum eaque voluptatibus? Nemo, sint nihil
            nulla impedit, ea eius accusamus voluptatem quos, voluptas fugit
            quaerat similique!
          </p>
        </div>
        <div>
          <h5 className="h5">Benifit</h5>
          <ul className="list-disc pl-5 text-sm text-gray-30 flex flex-col gap-1">
            <li>
              Hgh-quality materials ensure long-lasting durability and comfort.
            </li>
            <li>Designed to meet the needs of modern, active lifestyles.</li>
            <li>Avalible in a wide range of colors and trendy colors.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
