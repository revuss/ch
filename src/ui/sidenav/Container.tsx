export function Container({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="md:ml-64 font-primary select-none">
        <div className="px-4">{children}</div>
      </div>
    </>
  );
}
