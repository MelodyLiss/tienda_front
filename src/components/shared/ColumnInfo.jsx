import img_demo_1 from '/img/imagen_demo_1.png'

export const ColumnInfo = () => {
    return (

        <>
            <h2 className="text-2xl font-bold text-center m-4 uppercase">Plaquitas inteligentes con código QR</h2>

            <article className="flex  justify-center items-center">
                <section className="flex flex-col justify-center items-center  bg-amber-50 p-4 m-4">

                    <div >
                        <h3 className="text-1xl font-bold text-center m-4 uppercase">Plaquitas inteligentes con código QR</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quam ad aperiam. Dolores maiores assumenda repudiandae mollitia, ipsam odio at voluptate amet quasi doloribus suscipit nemo magnam cupiditate, ex perspiciatis quaerat veniam ea error provident repellat sint? Necessitatibus itaque perferendis labore, fugiat, saepe omnis voluptates aut deserunt minus totam velit? Ipsam voluptate maiores ducimus velit cumque nemo, placeat, ratione consequuntur dolores saepe veritatis incidunt natus numquam libero recusandae maxime quam?</p>
                    </div>

                    <img src={img_demo_1} alt="imagen_demo_1" className="w-1/2 rounded-full" />

                </section>




                <section className="flex flex-col-reverse justify-center items-center  bg-amber-50 p-4 m-4">

                    <div >
                        <h3 className="text-1xl font-bold text-center m-4 uppercase">Plaquitas inteligentes con código QR</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quam ad aperiam. Dolores maiores assumenda repudiandae mollitia, ipsam odio at voluptate amet quasi doloribus suscipit nemo magnam cupiditate, ex perspiciatis quaerat veniam ea error provident repellat sint? Necessitatibus itaque perferendis labore, fugiat, saepe omnis voluptates aut deserunt minus totam velit? Ipsam voluptate maiores ducimus velit cumque nemo, placeat, ratione consequuntur dolores saepe veritatis incidunt natus numquam libero recusandae maxime quam?</p>
                    </div>

                    <img src={img_demo_1} alt="imagen_demo_1" className="w-1/2 rounded-full" />

                </section>




                <section className="flex flex-col justify-center items-center  bg-amber-50 p-4 m-4">

                    <div >
                        <h3 className="text-1xl font-bold text-center m-4 uppercase">Plaquitas inteligentes con código QR</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quam ad aperiam. Dolores maiores assumenda repudiandae mollitia, ipsam odio at voluptate amet quasi doloribus suscipit nemo magnam cupiditate, ex perspiciatis quaerat veniam ea error provident repellat sint? Necessitatibus itaque perferendis labore, fugiat, saepe omnis voluptates aut deserunt minus totam velit? Ipsam voluptate maiores ducimus velit cumque nemo, placeat, ratione consequuntur dolores saepe veritatis incidunt natus numquam libero recusandae maxime quam?</p>
                    </div>

                    <img src={img_demo_1} alt="imagen_demo_1" className="w-1/2 rounded-full" />

                </section>

            </article>

        </>
    )
}
