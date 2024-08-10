import Container from "@/components/Container";
import Image from "next/image";

const CandidateDetailsPage = ({ params }: { params: { id: string } }) => {
  return (
    <Container className="max-w-[580px] my-8 gap-4">
      <h2 className="text-3xl font-semibold">Candidate Name</h2>
      <Image
        src={"/next.svg"}
        width={500}
        height={500}
        alt="Candidate Image"
        className="w-full rounded-xl"
      />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
        aliquid, deleniti rem quas mollitia pariatur velit labore quia assumenda
        eum fugit quo repudiandae repellendus dignissimos nobis saepe illo
        expedita voluptates nostrum asperiores. Pariatur assumenda harum ex odio
        ipsa quaerat, dignissimos deserunt soluta, tempora voluptatem
        consequuntur aspernatur eos consectetur quas eveniet.
      </p>
      <p>Faculty: BME</p>
      <p>Year: Last</p>
      <p>Party: Chebi Sang</p>
    </Container>
  );
};

export default CandidateDetailsPage;
