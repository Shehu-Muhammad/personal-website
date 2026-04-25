// components/testimonials/TestimonialCard.tsx
type TestimonialCardProps = {
  name: string;
  project: string;
  quote: string;
};

export default function TestimonialCard({
  name,
  project,
  quote,
}: TestimonialCardProps) {
  return (
    <article className='rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur'>
      <p className='text-sm leading-7 text-slate-300'>&ldquo;{quote}&rdquo;</p>

      <div className='mt-6'>
        <h3 className='text-lg font-semibold text-white'>{name}</h3>
        <p className='mt-1 text-sm text-slate-400'>{project}</p>
      </div>
    </article>
  );
}
