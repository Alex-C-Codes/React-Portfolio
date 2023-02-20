import React from "react";

export default function Footer() {
    return (
        <div class='centered'>
            <ul>
                <li class='footerStyle'>
                    <i class="mr-1 fa fa-github" aria-hidden="true"></i>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Alex-C-Codes">GitHub</a>
                </li>
                <li class='footerStyle'>
                    <i class="mr-1 fa fa-linkedin-square" aria-hidden="true"></i>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alex-cook-5408b4ab/">LinkedIn</a></li>
                <li class='footerStyle'>
                    <a target="_blank" rel="noopener noreferrer" href="https://alexcook.itch.io">itch.io</a>
                </li>
            </ul>
        </div>
    );
}