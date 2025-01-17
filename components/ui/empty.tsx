import Image from "next/image";


interface EmptyProps {
  label: string;
}

export const Empty = ({
  label
}: EmptyProps) => {
  return (
    (<div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-72 w-72 ">
        <Image
          src="/bot.gif"
          fill
          alt="Empty"
          className="mix-blend-multiply"
          unoptimized
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </div>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>)
  );
};