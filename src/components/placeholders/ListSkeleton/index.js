import React from 'react';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ListSkeleton = () => {
  return (
    <SkeletonPlaceholder>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item width="90%" marginLeft={20} marginTop={20}>
          <SkeletonPlaceholder.Item
            width="100%"
            height={200}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={20}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
      <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
        <SkeletonPlaceholder.Item width="90%" marginLeft={20} marginTop={20}>
          <SkeletonPlaceholder.Item
            width="100%"
            height={200}
            borderRadius={4}
          />
          <SkeletonPlaceholder.Item
            marginTop={6}
            width={80}
            height={20}
            borderRadius={4}
          />
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder.Item>
    </SkeletonPlaceholder>
  );
};

export default ListSkeleton;
