export interface GithubUserInterface {
    gists_url:           string;
    repos_url:           string;
    user_view_type:      UserViewType;
    following_url:       string;
    starred_url:         string;
    login:               string;
    followers_url:       string;
    type:                Type;
    url:                 string;
    subscriptions_url:   string;
    score:               number;
    received_events_url: string;
    avatar_url:          string;
    events_url:          string;
    html_url:            string;
    site_admin:          boolean;
    id:                  number;
    gravatar_id:         string;
    node_id:             string;
    organizations_url:   string;
}

export enum Type {
    Organization = "Organization",
    User = "User",
}

export enum UserViewType {
    Public = "public",
}