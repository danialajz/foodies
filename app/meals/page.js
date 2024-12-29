import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";

export default async function MealsPage() {
  const meals = await getAllMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicaton meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favotite recpie and cook it yourself. it is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}
