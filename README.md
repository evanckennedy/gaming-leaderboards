# Leaderboard Project

## Local Development Setup
To install all dependencies for this project with one command, use the following command in the root directory:
```
> npm run ci:all
``` 
This command will automatically install dependencies in:
- The root directory (leaderboard-project)
- The frontend (leaderboard/leaderboard_fe)
- The backend (leaderboard/leaderboard_be)

## Registering the Server in pgAdmin

**Note:** Ensure that both your **pgAdmin** and **PostgreSQL** containers are running before proceeding.

### Step 1: Access pgAdmin

1. Open your web browser and navigate to:
   ```
   http://localhost:5050
   ```

### Step 2: Login to pgAdmin

1. Use the following credentials to log in:
   - **Email**: `admin@admin.com`
   - **Password**: `admin`

### Step 3: Add a New Server in pgAdmin

1. In the pgAdmin interface, right-click on "Servers" in the left-hand tree view.
2. Click on "Register" and then "Server".

### Step 4:  Fill in the Server Details

1. **General Tab**:
   - **Name**: `postgres` (or any name you prefer)

2. **Connection Tab**:
   - **Host name/address**: `postgres` (or IP address of PostgreSQL container)
   - **Port**: `5432`
   - **Username**: `admin`
   - **Password**: `pass123`

### Step 5: Save the Configuration

1. Click on the **Save** button to register the server.

### Step 6: Verify the Server

1. In the left-hand tree view, you should see the server.
2. Click to expand the server dropdown, and then expand the Databases dropdown. You should see `leaderboard_db` listed there.

**Note:** The **pgAdmin** service is configured to persist its data using a Docker volume, so you only need to register the PostgreSQL server once. The server registration and other pgAdmin settings will persist between restarts of the Docker containers.

## Responsiveness Guide

This application is fully responsive and optimized for the following screen sizes:

- **720p (1280 x 720)**: Standard HD resolution  
- **1080p (1920 x 1080)**: Full HD resolution  
- **4K (3840 x 2160)**: Ultra HD resolution  

### Tailwind Custom Screen Sizes

The responsiveness is managed using Tailwind CSS, which includes custom screen sizes for **1080p** and **4K** resolutions defined in the `tailwind.config.js` file as follows:

```javascript
theme: {
   extend: {
      screens: {
         "3xl": "1920px", // Full HD (1080p)
         "4xl": "3840px", // 4K (3840px)
      },
   }
}
```

## Getting started

To make it easy for you to get started with GitLab, here's a list of recommended next steps.

Already a pro? Just edit this README.md and make it your own. Want to make it easy? [Use the template at the bottom](#editing-this-readme)!

## Add your files

- [ ] [Create](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#create-a-file) or [upload](https://docs.gitlab.com/ee/user/project/repository/web_editor.html#upload-a-file) files
- [ ] [Add files using the command line](https://docs.gitlab.com/ee/gitlab-basics/add-file.html#add-a-file-using-the-command-line) or push an existing Git repository with the following command:

```
cd existing_repo
git remote add origin https://git.bsdxr.com/BSDInternal/leaderboard-project.git
git branch -M main
git push -uf origin main
```

## Integrate with your tools

- [ ] [Set up project integrations](https://git.bsdxr.com/BSDInternal/leaderboard-project/-/settings/integrations)

## Collaborate with your team

- [ ] [Invite team members and collaborators](https://docs.gitlab.com/ee/user/project/members/)
- [ ] [Create a new merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html)
- [ ] [Automatically close issues from merge requests](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#closing-issues-automatically)
- [ ] [Enable merge request approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/)
- [ ] [Set auto-merge](https://docs.gitlab.com/ee/user/project/merge_requests/merge_when_pipeline_succeeds.html)

## Test and Deploy

Use the built-in continuous integration in GitLab.

- [ ] [Get started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/index.html)
- [ ] [Analyze your code for known vulnerabilities with Static Application Security Testing (SAST)](https://docs.gitlab.com/ee/user/application_security/sast/)
- [ ] [Deploy to Kubernetes, Amazon EC2, or Amazon ECS using Auto Deploy](https://docs.gitlab.com/ee/topics/autodevops/requirements.html)
- [ ] [Use pull-based deployments for improved Kubernetes management](https://docs.gitlab.com/ee/user/clusters/agent/)
- [ ] [Set up protected environments](https://docs.gitlab.com/ee/ci/environments/protected_environments.html)

***

# Editing this README

When you're ready to make this README your own, just edit this file and use the handy template below (or feel free to structure it however you want - this is just a starting point!). Thanks to [makeareadme.com](https://www.makeareadme.com/) for this template.

## Suggestions for a good README

Every project is different, so consider which of these sections apply to yours. The sections used in the template are suggestions for most open source projects. Also keep in mind that while a README can be too long and detailed, too long is better than too short. If you think your README is too long, consider utilizing another form of documentation rather than cutting out information.

## Name
Choose a self-explaining name for your project.

## Description
Let people know what your project can do specifically. Provide context and add a link to any reference visitors might be unfamiliar with. A list of Features or a Background subsection can also be added here. If there are alternatives to your project, this is a good place to list differentiating factors.

## Badges
On some READMEs, you may see small images that convey metadata, such as whether or not all the tests are passing for the project. You can use Shields to add some to your README. Many services also have instructions for adding a badge.

## Visuals
Depending on what you are making, it can be a good idea to include screenshots or even a video (you'll frequently see GIFs rather than actual videos). Tools like ttygif can help, but check out Asciinema for a more sophisticated method.

## Installation
Within a particular ecosystem, there may be a common way of installing things, such as using Yarn, NuGet, or Homebrew. However, consider the possibility that whoever is reading your README is a novice and would like more guidance. Listing specific steps helps remove ambiguity and gets people to using your project as quickly as possible. If it only runs in a specific context like a particular programming language version or operating system or has dependencies that have to be installed manually, also add a Requirements subsection.

## Usage
Use examples liberally, and show the expected output if you can. It's helpful to have inline the smallest example of usage that you can demonstrate, while providing links to more sophisticated examples if they are too long to reasonably include in the README.

## Support
Tell people where they can go to for help. It can be any combination of an issue tracker, a chat room, an email address, etc.

## Roadmap
If you have ideas for releases in the future, it is a good idea to list them in the README.

## Contributing
State if you are open to contributions and what your requirements are for accepting them.

For people who want to make changes to your project, it's helpful to have some documentation on how to get started. Perhaps there is a script that they should run or some environment variables that they need to set. Make these steps explicit. These instructions could also be useful to your future self.

You can also document commands to lint the code or run tests. These steps help to ensure high code quality and reduce the likelihood that the changes inadvertently break something. Having instructions for running tests is especially helpful if it requires external setup, such as starting a Selenium server for testing in a browser.

## Authors and acknowledgment
Show your appreciation to those who have contributed to the project.

## License
For open source projects, say how it is licensed.

## Project status
If you have run out of energy or time for your project, put a note at the top of the README saying that development has slowed down or stopped completely. Someone may choose to fork your project or volunteer to step in as a maintainer or owner, allowing your project to keep going. You can also make an explicit request for maintainers.
