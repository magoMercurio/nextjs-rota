import { getHomeInfo } from "@/lib/get-home-info"

export const Hero = async () => {
  const homeInfo = await getHomeInfo()

  const title = "Hola es el titulo"
  const description = "Hola es la descripcion"
  const image = 'https://www.pexels.com/es-es/foto/hombre-vestido-con-gorra-negra-con-los-ojos-cerrados-bajo-el-cielo-nublado-810775/'

  return(
    <section className="flex flex-row justify-between gap-4">
      <div>
        <h1 className="text-xl font-bold uppercase">{title}</h1>
        <p className="text-lg font-normal">{description}</p>
      </div>
      <img src={image} alt={title} />
    </section>
  )
}