import Container from "@/app/global-components/Container/Container";
import SubscribeForm from "@/app/global-components/SubscribeForm/SubscribeForm";
import Image from "next/image";

export default function Footer() {
  return (
    <section
      id="footer"
      className="bg-black w-full lg:fixed lg:bottom-0 lg:z-[-1] lg:h-[15rem]"
    >
      <footer className="w-full">
        {/* <div className=" py-16">
					<Container customClasses="flex flex-col lg:items-center lg:flex-row">
						<div className="basis-2/3 text-white">
							<h3 className="text-5xl font-bold">Subscribe</h3>
							<p>To our newsletter to get the latest updates and live gigs info.</p>
						</div>
						<div className="flex items-cente w-full mt-2.5 lg:mt-0 lg:basis-1/3 lg:justify-end">
							<SubscribeForm />
						</div>
					</Container>
				</div> */}
        <div className="bg-fluo-green pt-3 relative z-[100]">
          <Container customClasses="flex justify-between items-center">
            <Image
              className="max-w-[10rem] lg:max-w-[15rem] h-auto"
              src="/logo-portrait.png"
              width={815}
              height={144}
              alt="Footer logo"
            />
            <div className="flex gap-3 md:gap-4">
              <a
                href={
                  "https://www.linkedin.com/in/juan-ignacio-mascarenhas-31b83729a/"
                }
                target="_blank"
              >
                <svg
                  fill="#FFFFFF"
                  xmlns="http://www.w3.org/2000/svg"
                  width="52"
                  height="52"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              <a
                href={"https://www.instagram.com/nachomascarenhas/"}
                target="_blank"
              >
                <svg
                  fill="#FFFFFF"
                  width="52"
                  height="52"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62.9 19.2C62.8 16 62.2 13.7 61.5 11.6C60.8 9.5 59.7 7.8 58 6.1C56.3 4.4 54.6 3.4 52.6 2.6C50.6 1.8 48.4 1.3 45 1.2C41.5 1 40.5 1 32 1C23.5 1 22.6 1 19.2 1.1C15.8 1.2 13.7 1.8 11.6 2.5C9.5 3.2 7.8 4.4 6.1 6.1C4.4 7.8 3.3 9.5 2.6 11.6C1.8 13.6 1.3 15.8 1.2 19.2C1.1 22.6 1 23.5 1 32C1 40.5 1 41.4 1.1 44.8C1.2 48.2 1.8 50.3 2.5 52.4C3.2 54.5 4.3 56.2 6 57.9C7.7 59.6 9.5 60.7 11.5 61.4C13.5 62.1 15.7 62.7 19.1 62.8C22.5 63 23.4 63 31.9 63C40.4 63 41.3 63 44.7 62.9C48.1 62.8 50.2 62.2 52.3 61.5C54.4 60.8 56.1 59.7 57.8 58C59.5 56.3 60.6 54.5 61.3 52.5C62 50.5 62.6 48.3 62.7 44.9C62.8 41.7 62.8 40.7 62.8 32.2C62.8 23.7 63 22.6 62.9 19.2ZM57.3 44.5C57.2 47.5 56.6 49.1 56.2 50.3C55.6 51.7 54.9 52.8 53.8 53.8C52.7 54.9 51.7 55.5 50.3 56.2C49.2 56.6 47.6 57.2 44.5 57.3C41.3 57.3 40.3 57.3 32.1 57.3C23.9 57.3 22.8 57.3 19.6 57.2C16.6 57.1 15 56.5 13.8 56.1C12.4 55.5 11.3 54.8 10.3 53.7C9.2 52.6 8.6 51.6 7.9 50.2C7.5 49.1 6.9 47.5 6.8 44.4C6.8 41.3 6.8 40.3 6.8 32C6.8 23.7 6.8 22.7 6.9 19.5C7 16.5 7.6 14.9 8 13.7C8.6 12.3 9.3 11.2 10.3 10.2C11.4 9.1 12.4 8.5 13.8 7.9C14.9 7.5 16.5 6.9 19.6 6.8C22.8 6.7 23.8 6.7 32.1 6.7C40.4 6.7 41.4 6.7 44.6 6.8C47.6 6.9 49.2 7.5 50.4 7.9C51.8 8.5 52.9 9.2 53.9 10.2C55 11.3 55.6 12.3 56.3 13.7C56.7 14.8 57.3 16.4 57.4 19.5C57.5 22.7 57.5 23.7 57.5 32C57.5 40.3 57.4 41.3 57.3 44.5Z" />
                  <path d="M32.0016 16.0996C23.1016 16.0996 16.1016 23.2996 16.1016 31.9996C16.1016 40.8996 23.3016 47.8996 32.0016 47.8996C40.7016 47.8996 48.0016 40.8996 48.0016 31.9996C48.0016 23.0996 40.9016 16.0996 32.0016 16.0996ZM32.0016 42.3996C26.2016 42.3996 21.6016 37.6996 21.6016 31.9996C21.6016 26.2996 26.3016 21.5996 32.0016 21.5996C37.8016 21.5996 42.4016 26.1996 42.4016 31.9996C42.4016 37.7996 37.8016 42.3996 32.0016 42.3996Z" />
                  <path d="M48.7 19.1002C50.7435 19.1002 52.4 17.4436 52.4 15.4002C52.4 13.3567 50.7435 11.7002 48.7 11.7002C46.6565 11.7002 45 13.3567 45 15.4002C45 17.4436 46.6565 19.1002 48.7 19.1002Z" />
                </svg>
              </a>
            </div>
          </Container>
          <div className="bg-black text-white mt-2 py-2">
            <p className="text-[0.7rem] text-center leading-tight mb-1">
              Website powered by{" "}
              <a
                className="text-yellow-btn-primary underline underline-offset-4 hover:text-yellow-600"
                href="https://jim-dev-portfolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                JIM Front Dev
              </a>{" "}
              😎
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
