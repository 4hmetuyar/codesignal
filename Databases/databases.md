# Databases 

## 1. Project List

Your boss wants to identify the successful projects running in your company, so he asked you to prepare a list of all the currently active projects and their average monthly income.

You have stored the information about these projects in a simple database with a single Projects table that has five columns:

- **internal_id** : the company's internal identifier for the project;
- **project_name** : the official name of the project;
- **team_size** : the number of employees working on the project;
- **team_lead** : the name of the project manager;
- **income** : the average monthly income of the project.
Your boss says that internal project ids are irrelevant to him and that he isn't interested in how big the teams are. Since that's the case, he wants you to create another table by removing the `internal_id` and team_size columns from the existing Projects table. Return it sorted by `internal_id` in ascending order.


### Solution : 

```sql
CREATE PROCEDURE projectList()
BEGIN
	SELECT project_name,team_lead,income FROM Projects;
END
```


## 2. Countries Selection

Your friend wants to become a professional tour guide and travel all around the world. In pursuit of this dream, she enrolled in tour guide school. The professors in this school turned out to be very demanding, and one of them gave your friend a difficult assignment that she has to finish over the weekend.

Here's the assignment: Given a list of countries, your friend should identify all the countries that are in Africa. To help her, you have decided to write a function that will find all such countries from any set of countries. The countries table in which the countries are stored has the following structure:

- **name**: the name of the country;
- **continent**: the continent on which the country is situated;
- **population**: the country's population.
Your task is to return a new table that has the same columns, but that only contains the countries from `Africa`. The countries should be sorted alphabetically by their names.


### Solution : 

```sql
CREATE PROCEDURE countriesSelection()
BEGIN
	SELECT name,continent,population FROM countries where continent ='Africa'  Order By name asc;
END
```