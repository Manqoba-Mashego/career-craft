import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const PolicyPage = ({ policy }) => {
  return (
    <div className='bg-[#f3f3f34c] w-full min-h-screen pb-15 pt-10 md:pt-25'>
        <div className='mx-auto w-[85%] md:max-w-4xl flex flex-col gap-10 text-lg'>
            <Link href={"/"} className='flex gap-2 items-center text-gray-600 hover:text-[#faa329] text-[16px] w-fit transition duration-150'>
                <ArrowLeft size={18} />
                <span>Back to home</span>
            </Link>
        <div>
            <h1 className='policy'>{policy.title}</h1>
            <p className='last-update text-[16px] italic'>Last updated: {policy.lastUpdated}</p>
        </div>
        {policy.sections.map((section, index) => (
            <div key={index}>
                <h2 className='policy-point'>
                {index + 1}. {section.heading}
                </h2>

            <div className='flex flex-col'> 
            {section.content.map((item, i) => {
                if (item.type === "paragraph") {
                    return (
                        <p key={i}>
                            {item.text}
                        </p>
                    );
                }
                if (item.type === "list") {
                    return (
                    <ul key={i} className='policy-list list-disc pl-6 flex flex-col gap-1'>
                        {item.items.map((listItem, j) => (
                            <li key={j}>
                            {listItem}
                            </li>
                        ))}
                    </ul>
                  );
                }
                if (item.type === "heading"){
                    return (
                        <p key={i} className="font-bold mt-2">
                            {item.text}
                        </p>
                    )
                }

              })}

            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default PolicyPage;