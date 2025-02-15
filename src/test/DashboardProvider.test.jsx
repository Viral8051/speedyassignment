import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { DashboardProvider, useDashboard } from '../components/DashboardContext';

const TestComponent = () => {
  const {
    keyMetrics,
    userGrowthData,
    revenueDistributionData,
    topSongsData,
  } = useDashboard();

  return (
    <div>
      <div data-testid="key-metrics">
        <p>Total Streams: {keyMetrics.totalStreams}</p>
        <p>Top Artist: {keyMetrics.topArtist}</p>
      </div>
      <div data-testid="user-growth">
        {userGrowthData.map((data, index) => (
          <p key={index}>
            {data.month}: {data.total} total users, {data.active} active users
          </p>
        ))}
      </div>
      <div data-testid="revenue-distribution">
        {revenueDistributionData.map((data, index) => (
          <p key={index}>
            {data.name}: ${data.value.toFixed(2)}
          </p>
        ))}
      </div>
      <div data-testid="top-songs">
        {topSongsData.map((song, index) => (
          <p key={index}>
            {song.song}: {song.streams} streams
          </p>
        ))}
      </div>
    </div>
  );
};

describe('DashboardProvider', () => {
  test('provides key metrics data', async () => {
    render(
      <DashboardProvider>
        <TestComponent />
      </DashboardProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('key-metrics')).toHaveTextContent(/Total Streams/);
      expect(screen.getByTestId('key-metrics')).toHaveTextContent(/Top Artist/);
    });
  });

  test('provides user growth data', async () => {
    render(
      <DashboardProvider>
        <TestComponent />
      </DashboardProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('user-growth')).toHaveTextContent('Jan');
      expect(screen.getByTestId('user-growth')).toHaveTextContent('Feb');
      expect(screen.getByTestId('user-growth')).toHaveTextContent('Mar');
    });
  });

  test('provides revenue distribution data', async () => {
    render(
      <DashboardProvider>
        <TestComponent />
      </DashboardProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('revenue-distribution')).toHaveTextContent('Subscriptions');
      expect(screen.getByTestId('revenue-distribution')).toHaveTextContent('Ads');
    });
  });

  test('provides top songs data', async () => {
    render(
      <DashboardProvider>
        <TestComponent />
      </DashboardProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('top-songs')).toHaveTextContent('Shape of You');
      expect(screen.getByTestId('top-songs')).toHaveTextContent('Blinding Lights');
    });
  });
});
