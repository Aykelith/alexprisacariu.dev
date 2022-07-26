//= Functions
// Own
import classNames from 'classnames';

//= React components
// Own
import { MenuTag, GitLabTag, GitHubTag, MyEmailTag } from '../../tags';
// Others
import Link from "next/link";

export type HeaderProps = {
    small?: boolean;
    useH2?: boolean;
    showContacts?: boolean;
};

export default function Header({ small, useH2, showContacts = true }: HeaderProps) {
    const titleClasses = classNames('font-accent font-bold', { 'text-4xl': !small }, { 'text-2xl': small });

    return (
        <header>
            <Link href="/"><a className="cursor-pointer hover:underline text-black">{useH2 ? <h2 className={titleClasses}>Alexandru Prisacariu</h2> : <h1 className={titleClasses}>Alexandru Prisacariu</h1>}</a></Link>
            {showContacts && (
                <div className="mt-2 mb-4 flex gap-2 flex-wrap">
                    <GitLabTag />
                    <GitHubTag />
                    <MyEmailTag />
                </div>
            )}
            <div className="mt-2 flex gap-2 flex-wrap">
                <MenuTag href="/about_me">About me</MenuTag>
                <MenuTag href="#">Projects</MenuTag>
                <MenuTag href="/blog/1">Blog</MenuTag>
                <MenuTag href="/cv">CV</MenuTag>
            </div>
        </header>
    );
}
