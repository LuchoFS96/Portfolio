export function Nav_Button({ name }) {
  return (
    <div>
      <div className="md:flex py-2 px-5 w-max rounded bg-white text-black cursor-pointer">
        {name}
      </div>
    </div>
  );
}

export function Button({ name }) {
  return (
    <div>
      <div className="flex py-2 px-5 w-max text-xl rounded bg-black text-white cursor-pointer">
        {name}
      </div>
    </div>
  );
}
