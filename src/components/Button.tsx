export default function Button ({label}: {label: string}, onClick?: () => void) {
  return (
    <button onClick={onClick} className='bg-[#2C2E8C] text-white px-6 py-2 rounded-3xl'>
        {label}
    </button>
  )
}
