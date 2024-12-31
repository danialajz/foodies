"use server";

export async function shareMeal(formDate) {
  const meal = {
    title: formDate.get("title"),
    summary: formDate.get("summary"),
    instructions: formDate.get("instructions"),
    image: formDate.get("image"),
    creator: formDate.get("name"),
    creator_email: formDate.get("email"),
  };
  console.log(meal);
}
