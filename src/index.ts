import { GitHubClientInterface } from "./client";
import { githubLabelActions } from "./actions";

/**
 * GitHub plugin providing access to GitHub repository operations including:
 * - Repository cloning and file access
 * - Pull request and commit creation
 * - Issue labeling and management
 * - Repository label creation and management
 */
const githubPlugin = {
    name: "github",
    description: "GitHub client for repository operations and issue management",
    clients: [GitHubClientInterface],
    actions: githubLabelActions,
};
export default githubPlugin;
