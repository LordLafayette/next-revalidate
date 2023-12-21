import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function FormPage() {
  async function submit(data: FormData) {
    "use server";
    console.log("submit");

    revalidatePath("/time/");
    redirect("/time/");
  }

  return (
    <form action={submit}>
      <h1>reset cache</h1>

      <button type="submit">submit</button>
    </form>
  );
}
