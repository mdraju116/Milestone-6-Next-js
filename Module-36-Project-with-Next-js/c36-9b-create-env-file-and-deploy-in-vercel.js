/* 

✅✅✅✅2.Vercel.app

###################################################################
✅=>Option-1 : Using Dist Folder(CLI)--- (c29-4)

1.=>In the vscode terminal-project directory:
    -type : npm run build  (a dist folder will create automatically)

2.=>login vercel 
	-Click to Add New -project
	-Scroll down to : You can also drag and drop your project, or 			choose a file or a folder.
	-click choose a file or a folder.
	-select the dist folder inside the project
	-Upload and make it public

3.=>For any changes in the code, 
 	-again do : npm run build  and 
  	-redeploy the dist folder to Vercel

📌link : https://country-explorer-six-xi.vercel.app/


###################################################################
✅=>Option-2 : Using github Repo --- (C36-9)  --This is the best way

1.=>In the vscode terminal-project directory:
    -type : npm run build  (to see the project has any error or not)
    -If any error found, solve them first and push again to github.


2.=>Login Vercel and connect github
	-Click on Add New =>Project =>Import Git Repository
	
	-Select Repo (Import) 	      : Milestone-6
	     -Select Edit for SubRepo : Module-36 
	     -then select Book-vibe   : Book Vibe
	-Select Continue
	-Rename the project name      : book-vibe
	-Select Deploy
	-Continue to Dashboard

	-Click on the domain link: https://book-vibe-blush-phi.vercel.app/
	-Okay


	################################
	-NB:
	-For local api : no api data will show now
	-For that need to create an EnvironMent Variables

	-Select EnvironMent Variables (vercel site -left side bar)
	-select :Add Environment Variable
	-select : config (not secure)

	-provide Key as: NEXT_PUBLIC_SERVER_BASE_URL
		 Value as :https://book-vibe-blush-phi.vercel.app/
	-save
	-Select Redeploy (a pop will show).
	-okay

	-Now the local booksData.josn will be used as global api
	-check at : https://book-vibe-blush-phi.vercel.app/booksData.json


3.=>For any changes in the code, 
	-change code, check in  http://localhost:3000 (npm run dev)
 	-Commit and Push only to Github,
 	-no need to redeploy in vercel.



###################################################################
✅✅✅=> VVI : For any Local api=> public/data.json

	-create a bookvibe(root)/.env file and create a variable
	=NEXT_PUBLIC_SERVER_BASE_URL = http://localhost:3000

	-change all the fetch url with that variable (use backtick ``)
	=const response = await fetch(`     			
	 ${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/data/booksData.json`);


	-Now build,then push and deploy to vercel








 */