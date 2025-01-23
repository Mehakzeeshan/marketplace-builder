import Image from "next/image";


export default function Panel() {
    return (
        <section className="mt-12">
            <h2 className="text-4xl font-bold text-center text-[#333333]">Browse The Range</h2>
            <p className="text-center text-[#666666] mt-3 text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           
            <div className="flex justify-center gap-7 mt-14">
                <div>
                  <Image
                  src="/Dining.png" alt="Dining" width={380} height={380}
                  className="rounded-2xl"/>
                  <p className="text-center text-2xl font-bold mt-7 text-[#333333] ">Dining</p>
                </div>

                <div>
                  <Image
                  src="/Living.png" alt="Living" width={380} height={380}
                  className="rounded-2xl"/>
                  <p className="text-center text-2xl font-bold mt-7 text-[#333333] ">Living</p>
                </div>

                <div>
                  <Image
                  src="/Bedroom.png" alt="Bedroom" width={380} height={380}
                  className="rounded-2xl"/>
                  <p className="text-center text-2xl font-bold mt-7 text-[#333333] ">Bedroom</p>
                </div>
            </div>
        </section>
    )
}