export function Card(skill) {
  return (
    <div className="bg-white  h-20 w-52 flex flex-row rounded-full justify-evenly items-center border-2 border-black">
      <img src={skill.skill.icon} className="w-16 rounded-3xl" />
      <h1 className="font-semibold text-2xl">{skill.skill.name}</h1>
    </div>
  );
}
