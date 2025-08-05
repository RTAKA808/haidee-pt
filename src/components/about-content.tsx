import Image from "next/image"

export default function About(){
    return(
        <div className="flex flex-col w-full items-center justify-center bg-primary">
            <h1 className="text-3xl font-bold py-10">
                About Me
            </h1>
            <div className="py-5">
              <Image
              src="/assets/haideeprofile.jpeg"
              alt="Haidee Profile Picture"
              height={400}
              width={300}
              className="object-contain rounded-full"
              />  
            </div>
            <p>

            </p>
        </div>
    )
}