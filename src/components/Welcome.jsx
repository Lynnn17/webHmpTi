import { useState } from "react";
import Kahim from "../assets/kahim.png";
import Wakahim from "../assets/wakahim.png";

const Welcome = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div
        className="-mt-1 w-full h-full lg:bg-cover"
        style={{
          backgroundImage:
            'url("https://bemfilkom.ub.ac.id/assets/kremBg-CWd6Mabg.svg")',
        }}
      >
        <div className="py-4 flex flex-col items-center justify-center">
          <img
            className="mx-auto w-5/6  lg:w-2/4"
            src="https://bemfilkom.ub.ac.id/assets/sambutan-0_LVhr34.svg"
            alt="Sambutan"
          />
          <img
            className="lg:w-[200px] mt-2 w-[150px]"
            src="data:image/svg+xml,<svg%20width='321'%20height='8'%20viewBox='0%200%20321%208'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'><line%20x1='0.5'%20y1='4.5'%20x2='320.5'%20y2='4.5'%20stroke='%23BCDB37'%20stroke-width='3'/><line%20x1='100.5'%20y1='4'%20x2='220.5'%20y2='4'%20stroke='%23208B71'%20stroke-width='8'/></svg>"
            alt="Garis Bawah"
          />
        </div>

        <div className="lg:grid flex-col lg:grid-cols-4 lg:gap-2 py-10 px-2 ">
          {/* Kahim */}
          <div className="flex flex-col  items-center ">
            <button
              type="button"
              className="ring-1 ring-[#208b71] bg-[#208b71] hover:bg-green outline-3 outline-gray-200  focus:outline-5 text-white text-lg font-semibold py-1.5 px-20 rounded-full"
            >
              Kahim
            </button>
            <img
              className="w-[100px] mx-auto mt-[-9px]"
              src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1715851631/trapesium_pyjb0a.png"
              alt=""
            />
            <img
              className="w-[15px] mx-auto mt-[-15px] lg:mt-[-14px]"
              src="data:image/svg+xml,%3csvg%20width='82'%20height='43'%20viewBox='0%200%2082%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M75.0863%201.15555C75.4775%200.78643%2075.9377%200.497863%2076.4406%200.306321C76.9435%200.114778%2077.4793%200.0240118%2078.0173%200.0392088C78.5553%200.0544057%2079.0851%200.175267%2079.5763%200.39489C80.0675%200.614512%2080.5107%200.928596%2080.8803%201.31921C81.25%201.70982%2081.539%202.16932%2081.7308%202.67145C81.9227%203.17359%2082.0136%203.70853%2081.9984%204.24574C81.9831%204.78296%2081.8621%205.31192%2081.6421%205.80242C81.4222%206.29293%2081.1076%206.73537%2080.7164%207.10449L43.8381%2041.8816C43.0773%2042.5998%2042.07%2043%2041.023%2043C39.976%2043%2038.9688%2042.5998%2038.208%2041.8816L1.32552%207.10449C0.925757%206.73781%200.60294%206.29546%200.375833%205.80315C0.148725%205.31084%200.0218524%204.77839%200.00257798%204.2367C-0.0166964%203.69502%200.0720185%203.15491%200.263562%202.64775C0.455106%202.14059%200.74566%201.67649%201.11836%201.2824C1.49105%200.888309%201.93846%200.57209%202.43458%200.352109C2.9307%200.132129%203.46566%200.0127718%204.00837%200.000970236C4.55108%20-0.0108314%205.09074%200.0851565%205.59598%200.283362C6.10123%200.481567%206.56199%200.778038%206.95152%201.15555L41.023%2033.2815L75.0863%201.15555Z'%20fill='%23FFFDFD'/%3e%3c/svg%3e"
              alt=""
            />
            <img
              className="lg:w-[200px] mt-6 lg:mt-10  mx-auto w-[175px]"
              src={Kahim}
              alt="Kahim"
            />
          </div>

          {/* WAKAHIM */}
          <div className="xl:order-last mt-8 lg:mt-0 flex flex-col  items-center ">
            <button
              type="button"
              className="ring-1 ring-[#208b71] bg-[#208b71] hover:bg-green outline-3 outline-gray-200  focus:outline-5 text-white text-lg font-semibold py-1.5 px-20 rounded-full"
            >
              Wakahim
            </button>
            <img
              className="w-[100px] mx-auto mt-[-8px]"
              src="https://res.cloudinary.com/dkncrhkfo/image/upload/v1715851631/trapesium_pyjb0a.png"
              alt=""
            />
            <img
              className="w-[15px] lg:w-[17px] mx-auto mt-[-15px] lg:mt-[-14px]"
              src="data:image/svg+xml,%3csvg%20width='82'%20height='43'%20viewBox='0%200%2082%2043'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M75.0863%201.15555C75.4775%200.78643%2075.9377%200.497863%2076.4406%200.306321C76.9435%200.114778%2077.4793%200.0240118%2078.0173%200.0392088C78.5553%200.0544057%2079.0851%200.175267%2079.5763%200.39489C80.0675%200.614512%2080.5107%200.928596%2080.8803%201.31921C81.25%201.70982%2081.539%202.16932%2081.7308%202.67145C81.9227%203.17359%2082.0136%203.70853%2081.9984%204.24574C81.9831%204.78296%2081.8621%205.31192%2081.6421%205.80242C81.4222%206.29293%2081.1076%206.73537%2080.7164%207.10449L43.8381%2041.8816C43.0773%2042.5998%2042.07%2043%2041.023%2043C39.976%2043%2038.9688%2042.5998%2038.208%2041.8816L1.32552%207.10449C0.925757%206.73781%200.60294%206.29546%200.375833%205.80315C0.148725%205.31084%200.0218524%204.77839%200.00257798%204.2367C-0.0166964%203.69502%200.0720185%203.15491%200.263562%202.64775C0.455106%202.14059%200.74566%201.67649%201.11836%201.2824C1.49105%200.888309%201.93846%200.57209%202.43458%200.352109C2.9307%200.132129%203.46566%200.0127718%204.00837%200.000970236C4.55108%20-0.0108314%205.09074%200.0851565%205.59598%200.283362C6.10123%200.481567%206.56199%200.778038%206.95152%201.15555L41.023%2033.2815L75.0863%201.15555Z'%20fill='%23FFFDFD'/%3e%3c/svg%3e"
              alt=""
            />
            <img
              className="lg:w-[200px] mt-6 lg:mt-11  mx-auto w-[175px]"
              src={Wakahim}
              alt="Wakahim"
            />
          </div>

          {/* Salam */}
          <div className="mt-8 lg:mt-0 text-justify mx-auto flex flex-col px-8 text-[16px] lg:text-[20px]  text-black w-full col-span-2 ">
            <span className=" font-extrabold whitespace-normal ">
              Assalamualaikum Wr Wb. Shalom, Om Swastyastu, Namo Buddhaya, Salam
              Kebajikan Bagi Kita Semua.
            </span>
            <br />
            <span
              className={`whitespace-pre-wrap ${
                isOpen ? null : "line-clamp-[10]"
              }`}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              mollitia ab accusantium eum autem saepe, corrupti distinctio quos
              culpa, laboriosam est ipsa unde. Nostrum accusamus sit quisquam
              laboriosam? Corporis eius dolore doloribus quos numquam
              accusantium eligendi! Temporibus voluptatem reprehenderit
              asperiores! Quos, sequi. Quae labore similique unde iste rerum
              expedita ab magnam officia quia perspiciatis? Natus doloremque
              illo amet esse libero autem, officia dolore! Recusandae eligendi
              quia dignissimos eos odit a ipsum autem facere, velit tenetur
              dolorum nesciunt illo aut voluptatibus explicabo neque harum
              quibusdam nobis libero quas. Quaerat, enim explicabo. Quam
              nesciunt labore repellat modi molestiae alias harum molestias
              veniam officiis blanditiis quas, voluptatum assumenda illo
              accusamus corporis inventore culpa ullam vel vitae, atque
              excepturi. Iure ratione iste itaque magnam, facere placeat nulla.
              Est assumenda ipsa animi praesentium corrupti, accusantium natus
              accusamus, mollitia excepturi ab harum qui hic modi error
              perferendis deleniti, repellat reprehenderit exercitationem.
              Voluptate delectus molestias saepe id totam modi, ipsa odio.
              Laborum nemo commodi hic earum blanditiis accusamus recusandae
              corporis inventore ab culpa! Architecto officia expedita quam
              velit repudiandae hic voluptas laboriosam eaque iste. Quisquam
              alias earum perspiciatis vero enim iusto saepe quos, repellendus
            </span>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-500 text-left"
            >
              {isOpen ? "Lihat Lebih Sedikit" : "Lihat Selengkapnya "}
            </button>

            <br />
            <span className="font-extrabold text-black">HMP TI UNESA 2024</span>
          </div>
        </div>

        <div>
          <span className="flex font-extrabold text-[#208b71] justify-center mx-auto lg:text-[28px] text-[20px]">
            #SatukanGagasCiptakanKarya
          </span>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
