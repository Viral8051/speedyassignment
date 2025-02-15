Thought Process:

In developing this dashboard, I aimed to deliver a responsive, and visually appealing experience for analyzing music streaming data. Here are some of the key design considerations:

Component Structure: I divided the app into reusable components:

        KeyMetrics: displays aggregate metrics like revenue and user statistics.
        RevenueDistribution:  shows a pie chart for the breakdown of revenue sources.
        TopSongsChart: uses a bar chart to highlight the most popular songs based on streams.
        UserGrowthChart: uses a line chart to track the growth of users over time.
        DataTable: enables users to sort and filter detailed data by song, artist, and streams.

Responsiveness: I used Tailwind CSS to make the application responsive.

Interactivity: Sorting, filtering, and clickable chart slices.

Charting and Visualization: I chose to use Recharts for chart rendering.

State Management: The app relies on React's useState and hooks for managing state. I used local state for storing and updating filter criteria, sorting, and active chart slices.



Trade-offs Made:

Use of Local State: I opted for local state management (useState) for simplicity.

Simplified Data: For the sake of this demo, I used static mock data. In a real-world application, you would likely need to fetch data from an API, which would require additional features like error handling, loading states, and API integration.

Performance Optimization: While the application is fairly performant given the small dataset, as the data grows in real-world scenarios, optimizations like memoization or lazy loading of charts could be considered to improve rendering times.

Styling Approach: I chose Tailwind CSS for styling due to its utility-first nature, which allows for rapid prototyping and customization.

Chart Interactivity: I added hover effects and interactivity to the charts. However, these interactions are minimal compared to more complex dashboards that offer drill-down functionalities or dynamic filtering. The trade-off was simplicity and ease of use over advanced features.




Technologies Used:

React
Vite
Recharts
Tailwind CSS
Jest