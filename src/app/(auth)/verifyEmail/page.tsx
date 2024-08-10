import Container from "@/components/Container";

const VerifyEmail = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const token = searchParams.token as string;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/verifyEmail?token=${token}`,
    {
      method: "POST",
    }
  );

  if (token && !response.ok) {
    return (
      <Container className="min-h-[70vh] items-center justify-center gap-4">
        <h1 className="text-3xl font-semibold">
          Verification Failed or Token expired
        </h1>
        <p>Please try again.</p>
      </Container>
    );
  }

  if (response.ok) {
    return (
      <Container className="min-h-[70vh] items-center justify-center gap-4">
        <h1 className="text-3xl font-semibold">Email Verified</h1>
        <p>You can now login.</p>
      </Container>
    );
  }

  return (
    <Container className="min-h-[70vh] items-center justify-center gap-4">
      <h1 className="text-3xl font-semibold">Verification Email Sent</h1>
      <p>Please check your email.</p>
    </Container>
  );
};

export default VerifyEmail;
