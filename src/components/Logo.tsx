export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-3">
      <img
        src="images/logo.jpeg"
        alt="Logo du site"
        className="h-12 w-12 shrink-0 rounded-full object-contain"
      />

      <span className="leading-tight">
        <span
          className={`block font-serif text-lg font-bold ${
            light ? 'text-white' : 'text-navy-900'
          }`}
        >
          Organisation intergouvernementale
        </span>

        <span
          className={`block text-[11px] tracking-wide ${
            light ? 'text-white/70' : 'text-slate-500'
          }`}
        >
          Security Portal
        </span>
      </span>
    </span>
  )
}