Run the following in EC2 instance 
sudo apt-get update && sudo apt-get install docker.io -y && sudo systemctl start docker && sudo chmod 666 /var/run/docker.sock && sudo systemctl enable docker && docker --version

Add the GitHub runner 
change the URL in crm.service.ts
Chnage the URL in CRM-clinet index.js file 
