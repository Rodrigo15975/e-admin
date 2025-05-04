import Image from 'next/image'

const Portada = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-6">
      <Image
        src="https://images.unsplash.com/photo-1495714096525-285e85481946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Camera security illustration"
        width={800}
        height={800}
        className="max-w-full h-full rounded-3xl shadow-lg object-cover object-center w-full"
        priority
      />
    </div>
  )
}

export default Portada
