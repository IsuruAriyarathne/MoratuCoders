Goto settings and change database configerations before run the server.
If you are using nodemon to start the server use "nomdemon run start" command.
------------------------------------------------------------------------------------------------
Can use these endpoints to interact with employee_table
    1. PUT  - get list of employees     - localhost:5500/oosd/back-end/employees
    2. PUT  - get details of an emp     - localhost:5500/oosd/back-end/employees/[id]
    3. POST - Add employee              - localhost:5500/oosd/back-end/employees
        body -  {
                    "employee_id"   : //id,             --int
                    "salary_id"     : //sal_id,         --int
                    "name"          : //name,           --str
                    "dob"           : //[YYYY-MM-DD],   --str
                    "employee_type" : //[1/2/3/4],      --int
                    "gender"        : //[M/F]           --str
                }
    4. PUT - update an employee details - localhost:5500/oosd/back-end/employees
        body -  {
                    "employee_id"   : //id,             --int
                    "salary_id"     : //sal_id,         --int
                    "name"          : //name,           --str
                    "dob"           : //[YYYY-MM-DD],   --str
                    "employee_type" : //[1/2/3/4],      --int
                    "gender"        : //[M/F]           --str
                }
    5. DELETE- delete an employee       - localhost:5500/oosd/back-end/employees
         body - {
                    "employee_id"   : //id,             --int
                }
------------------------------------------------------------------------------------------------