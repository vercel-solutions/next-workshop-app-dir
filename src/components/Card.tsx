function Card({children}: {children: React.ReactNode}) {
  return (
    <div className="rounded-lg bg-[radial-gradient(at_left_top,#71717a,50px,#27272a_50%)] p-0.5">
      <div className="rounded-lg bg-stone-900">{children}</div>
    </div>
  );
}

export default Card;
