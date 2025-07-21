import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { AUTHOR_BY_GITHUB_ID_QUERY } from "./sanity/lib/queries"
import { client } from "./sanity/lib/client"
import { writeClient } from "./sanity/lib/write-client"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  callbacks: {
    async signIn({
      user,
      account,
      profile,
      email,
      credentials,
    }: {
      user: import("next-auth").User;
      account?: import("next-auth").Account | null;
      profile?: import("next-auth").Profile;
      email?: { verificationRequest?: boolean };
      credentials?: Record<string, unknown>;
    }) {
      const name = user.name ?? "";
      const emailAddr = user.email ?? "";
      const image = user.image ?? "";
      // profile.id can be string | null | undefined, so fallback to empty string if null
      const id = typeof profile?.id === "string" ? profile.id : "";
      const login = profile?.login ?? "";
      const bio = profile?.bio ?? "";

      const existingUser = await client.withConfig({ useCdn: false }).fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
        id,
      });
      if (!existingUser) {
        await writeClient.create({
          _type: "author",
          id,
          name,
          username: login,
          email: emailAddr,
          image,
          bio,
        });
      }
      return true;
    },

     async jwt({ token, account, profile }: { token: any; account?: any; profile?: any }) {
      if (account && profile) {
        const user = await client
          .withConfig({ useCdn: false })
          .fetch(AUTHOR_BY_GITHUB_ID_QUERY, {
            id: profile?.id,
          });

        token.id = user?._id;
      }

      return token;
    },
     async session({ session, token }: { session: any; token: any }) {
      Object.assign(session, { id: token.id });
      return session;
    },
  }

})