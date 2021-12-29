USE [pagination]
GO

/****** Object:  StoredProcedure [dbo].[getPersons]    Script Date: 12/29/2021 12:01:47 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- =============================================
-- Author:		Mustafa Mohamed
-- Create date: 28th December 2021
-- Description:	Get the persons in a paginated manner
-- =============================================
CREATE OR ALTER PROCEDURE [dbo].[getPersons] 
	@PageNumber AS INT, @RowCount AS INT, @TotalPersons AS INT OUTPUT
AS
BEGIN
	-- SET NOCOUNT ON added to prevent extra result sets from
	-- interfering with SELECT statements.
	SET NOCOUNT ON;

	--Get the number of persons
	SELECT @TotalPersons = COUNT(*) FROM person;

	--Now get the persons
    SELECT [id], [first_name] firstName, [last_name] lastName, phone 
	FROM [person]
	ORDER BY [id]
	OFFSET (@PageNumber-1)*@RowCount ROWS FETCH NEXT @RowCount ROWS ONLY
END
GO

