/*Please add ; after each select statement*/
CREATE PROCEDURE projectsTeam()
BEGIN
	SELECT DISTINCT  name FROM projectLog order by name asc ;
END