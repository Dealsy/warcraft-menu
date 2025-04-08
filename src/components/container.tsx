type ContainerProps = {
  children: React.ReactNode;
  additionalContent?: React.ReactNode;
};

export default function Container({
  children,
  additionalContent,
}: ContainerProps) {
  return (
    <div className="h-screen relative">
      <div className="absolute left-[240px] top-1/2 -translate-y-1/2">
        {children}
      </div>
      {additionalContent}
    </div>
  );
}
