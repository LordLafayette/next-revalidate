import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function FormPage() {
  async function submit(data: FormData) {
    "use server";

    if (data.get("trailingSlash")) {
      console.log("trailingSlash");

      revalidatePath("/time/");
      redirect("/time/");
    } else {
      console.log("not trailingSlash");
      revalidatePath("/time");
      redirect("/time");
    }
  }

  return (
    <form action={submit}>
      <h1>reset cache</h1>

      <input id="trailingSlash" type="checkbox" name="trailingSlash" />
      <label htmlFor="trailingSlash">Revalidate with TrailingSlash</label>

      <br />
      <button type="submit">submit</button>
    </form>
  );
}
