import { getHomeInfo } from "@/lib/get-home-info"
import { BlocksRenderer } from "@strapi/blocks-react-renderer"

export const Hero = async () => {
  const { title, description, image } = await getHomeInfo()

  return(
    <section className="flex flex-row justify-between gap-4">
      <div>
        <h1 className="text-xl font-bold uppercase">{title}</h1>
        <div className="[&>p>strong]:font-bold">
          <BlocksRenderer content={description} />
        </div>
      </div>
      <img
        className=" w-40 object-cover" 
        src={image}
        alt={title} 
      />
    </section>
  )
}