import Box from '../box';

interface IProps {
  skills: string[];
  title: string;
}

const Skills = ({ skills, title }: IProps) => {
  return (
    <Box className="!border-none !p-3 !gap-2">
      <p className="text-heading font-medium text-xs font-quicksand">{title}</p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <Box
            key={i}
            className="!border-none !p-2 !py-1 !bg-neutral-grey-0 !rounded-md !w-fit !gap-2"
          >
            <p className="text-heading capitalize text-sm font-medium font-quicksand">{skill}</p>
          </Box>
        ))}
      </div>
    </Box>
  );
};

export default Skills;
