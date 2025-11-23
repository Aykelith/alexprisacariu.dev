// Assets
import LinkSVG from "../components/icons/link.svg";
import MailSVG from "../components/icons/mail.svg";
import GitHubSVG from "../components/icons/github.svg";
import GitLabSVG from "../components/icons/gitlab.svg";
import LinkedInSVG from "../components/icons/linkedin.svg";
import TwitterSVG from "../components/icons/twitter.svg";

// Constants
import MailAddress from "../constants/MailAddress";
import GitHubAddress from "../constants/GitHubAddress";
import GitLabAddress from "../constants/GitLabAddress";
import LinkedInAddress from "../constants/LinkedInAddress";
import TwitterAddress from "../constants/TwitterAddress";

/**
 * The connect with me card component
 * 
 * @returns {Promise<JSX.Element>} the connect with me card component
 */
export default async function ConnectWithMeCard() {
    return (
        <div className="card flex flex-col gap-3 social-links-card">
            <div className="text-foreground mb-1"><LinkSVG className="w-6 h-6" /> Connect with me</div>
            <a href={`mailto:${MailAddress}`} target="_blank"><MailSVG className="w-6 h-6" /> alex@alexprisacariu.dev</a>
            <a href={GitHubAddress} target="_blank"><GitHubSVG className="w-6 h-6" /> Aykelith</a>
            <a href={GitLabAddress} target="_blank"><GitLabSVG className="w-6 h-6" /> Aykelith</a>
            <a href={LinkedInAddress} target="_blank"><LinkedInSVG className="w-6 h-6" /> Alexandru Prisacariu</a>
            <a href={TwitterAddress} target="_blank"><TwitterSVG className="w-6 h-6" /> @aykelith</a>
        </div>
    );
}