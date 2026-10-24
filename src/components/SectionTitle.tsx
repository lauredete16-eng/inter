export default function SectionTitle({ title, text }: { title: string; text?: string }) {
  return (
    <div className="mb-8 max-w-2xl">
      <h2 className="text-2xl font-bold md:text-3xl">{title}</h2>
      <div className="mt-3 h-1 w-12 bg-notice-600" />
      {text && <p className="mt-4 leading-relaxed text-slate-600">{text}</p>}
    </div>
  )
}
