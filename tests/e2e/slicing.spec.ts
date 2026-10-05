import { expect, test } from "@playwright/test";

test("login validation and navigation are keyboard accessible", async ({ page }) => {
  await page.goto("/sign-in");
  await expect(page.getByRole("heading", { name: "Welcome back" })).toBeVisible();
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page.getByText("Enter a valid school email address.")).toBeVisible();
  await expect(page.getByText("Password must contain at least 8 characters.")).toBeVisible();
  await page.getByLabel("School email").fill("admin@nusantara.sch.id");
  await page.getByLabel("Password", { exact: true }).fill("development-only");
  await page.getByRole("button", { name: "Sign in" }).click();
  await expect(page).toHaveURL(/\/admin$/);
  await expect(page.getByRole("heading", { name: /Good morning/ })).toBeVisible();
});

test("admin navigation reaches management and course screens", async ({ page }, testInfo) => {
  await page.goto("/admin");
  if (testInfo.project.name.includes("mobile")) {
    await page.getByRole("button", { name: "Open navigation" }).click();
  }
  await page.getByRole("link", { name: "People" }).click();
  await expect(page.getByRole("heading", { name: "People" })).toBeVisible();
  await page.getByLabel("Search users").fill("Nadia");
  await expect(page.getByText("Nadia Putri")).toBeVisible();
  await expect(page.getByRole("row").filter({ hasText: "Rina Wijaya" })).toHaveCount(0);
  if (testInfo.project.name.includes("mobile")) {
    await page.getByRole("button", { name: "Open navigation" }).click();
  }
  await page.getByRole("link", { name: "Courses" }).click();
  await expect(page.getByRole("heading", { name: "Courses" })).toBeVisible();
  await page.getByRole("link", { name: "Open course" }).first().click();
  await expect(page.getByRole("heading", { name: "Algebra and mathematical reasoning" })).toBeVisible();
});

test("assignment submission and quiz interaction expose success states", async ({ page }) => {
  await page.goto("/assignments/algebra-practice");
  await page.getByRole("button", { name: "Submit assignment" }).click();
  await expect(page.getByText("Submission received")).toBeVisible();

  await page.goto("/quizzes/linear-equations");
  await page.getByText("2x = 8").click();
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByText("True", { exact: true }).click();
  await page.getByRole("button", { name: "Next", exact: true }).click();
  await page.getByText("Subtract 6 from both sides").click();
  await page.getByRole("button", { name: "Submit quiz" }).click();
  await expect(page.getByRole("heading", { name: "Quiz submitted" })).toBeVisible();
});

test("mobile navigation opens and closes", async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.includes("mobile"), "Mobile-only behavior");
  await page.goto("/admin");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await expect(page.getByRole("navigation", { name: "Primary navigation" })).toBeVisible();
  await page.getByRole("button", { name: "Close menu" }).click();
});
