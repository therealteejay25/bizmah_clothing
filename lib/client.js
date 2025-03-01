import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Sanity Client Configuration
export const client = sanityClient({
	projectId: "w0d1l1o9",
	dataset: "bizmah",
	apiVersion: "2024-02-27",
	useCdn: true,
	token: process.env.NEXT_PUBLIC_SANITY_TOKEN || "", // Ensure token is not undefined
});

// Debugging: Log Token (Only in Development)
if (process.env.NODE_ENV === "development") {
	console.log(
		"Sanity Token:",
		process.env.NEXT_PUBLIC_SANITY_TOKEN ? "✔️ Loaded" : "❌ Not Found"
	);
}

// Image URL Builder
const builder = imageUrlBuilder(client);

export const urlFor = (source) => (source ? builder.image(source).url() : "");
